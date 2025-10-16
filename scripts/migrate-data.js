const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// MongoDB connection
const MONGO_URI = 'mongodb+srv://20cst005abhishek:S6fxGAEwrSZIryY5@cluster0.guxyl2y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const DB_NAME = 'miestilo';

async function migrateData() {
  let client;
  
  try {
    console.log('🔄 Connecting to MongoDB...');
    client = new MongoClient(MONGO_URI);
    await client.connect();
    
    const db = client.db(DB_NAME);
    console.log('✅ Connected to MongoDB successfully!');

    // Migrate Products
    console.log('\n📦 Migrating Products...');
    const productsPath = path.join(__dirname, '..', 'src', 'app', 'data', 'products.json');
    
    if (fs.existsSync(productsPath)) {
      const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
      
      if (productsData.length > 0) {
        // Clear existing products
        await db.collection('products').deleteMany({});
        
        // Add timestamps to products
        const productsWithTimestamps = productsData.map(product => ({
          ...product,
          createdAt: new Date(),
          updatedAt: new Date()
        }));
        
        const productResult = await db.collection('products').insertMany(productsWithTimestamps);
        console.log(`✅ Migrated ${productResult.insertedCount} products`);
      } else {
        console.log('⚠️  No products found to migrate');
      }
    } else {
      console.log('⚠️  Products file not found');
    }

    // Migrate Blogs
    console.log('\n📝 Migrating Blogs...');
    const blogsPath = path.join(__dirname, '..', 'src', 'app', 'data', 'blogs.json');
    
    if (fs.existsSync(blogsPath)) {
      const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
      
      if (blogsData.length > 0) {
        // Clear existing blogs
        await db.collection('blogs').deleteMany({});
        
        // Add timestamps and excerpt to blogs
        const blogsWithTimestamps = blogsData.map(blog => ({
          ...blog,
          excerpt: blog.excerpt || blog.content?.substring(0, 150) + '...' || '',
          createdAt: new Date(),
          updatedAt: new Date()
        }));
        
        const blogResult = await db.collection('blogs').insertMany(blogsWithTimestamps);
        console.log(`✅ Migrated ${blogResult.insertedCount} blogs`);
      } else {
        console.log('⚠️  No blogs found to migrate');
      }
    } else {
      console.log('⚠️  Blogs file not found');
    }

    console.log('\n🎉 Data migration completed successfully!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔐 MongoDB connection closed');
    }
  }
}

// Run migration
migrateData();

// dummy-posts-data.js
export const posts = [
  {
    id: 1,
    title: "The Future of Data Visualization",
    subtitle: "Exploring new trends in interactive charts and graphs",
    excerpt:
      "Data visualization is evolving rapidly with new technologies like WebGL, AR, and AI-powered insights. Discover the trends shaping how we present data in 2025.",
    content: `# The Future of Data Visualization

Data visualization has come a long way from simple bar charts and pie graphs. As we move deeper into the digital age, the way we present and interact with data is evolving at an unprecedented pace.

## Interactive Visualizations

Modern data visualization tools are moving beyond static charts to create **interactive experiences** that allow users to:

- Drill down into specific data points
- Filter and manipulate datasets in real-time
- Create personalized views of information

## WebGL and Performance

With the advent of **WebGL** technology, we can now render complex visualizations directly in the browser without sacrificing performance. This has opened up possibilities for:

1. Real-time 3D data representations
2. Large-scale dataset visualizations
3. Smooth animations and transitions

## AI-Powered Insights

Artificial intelligence is revolutionizing how we discover patterns in data. AI can now:

> Automatically suggest the most effective visualization types based on your data structure and intended audience.

### Code Example

Here's a simple example of creating an interactive chart:

\`\`\`javascript
const chart = new InteractiveChart({
  data: salesData,
  type: 'line',
  interactive: true,
  animations: {
    duration: 300,
    easing: 'ease-in-out'
  }
});
\`\`\`

---

The future of data visualization is bright, with endless possibilities for creating more engaging and insightful experiences.`,
    author: "Sarah Chen",
    publishedAt: "2025-01-15T10:30:00Z",
    readTime: "5 min read",
    tags: ["Data Visualization", "WebGL", "AI", "Technology"],
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    subtitle: "Best practices for modern web development",
    excerpt:
      "Learn essential strategies for building web applications that can grow with your business needs, from architecture decisions to deployment strategies.",
    content: `# Building Scalable Web Applications

Creating web applications that can handle growth is one of the most critical challenges in modern development. Whether you're building a startup MVP or an enterprise solution, scalability should be a core consideration from day one.

## Architecture Fundamentals

### Microservices vs Monoliths

The debate between **microservices** and **monolithic** architectures continues, but the choice often depends on your specific needs:

**Monolithic Advantages:**
- Simpler deployment
- Easier debugging
- Better performance for smaller applications

**Microservices Benefits:**
- Independent scaling
- Technology diversity
- Fault isolation

## Database Design Patterns

Proper database design is crucial for scalability:

1. **Normalization** - Reduce data redundancy
2. **Indexing** - Optimize query performance  
3. **Caching** - Reduce database load
4. **Sharding** - Distribute data across multiple databases

### Example Database Schema

\`\`\`sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_users_email ON users(email);
\`\`\`

## Performance Optimization

Key strategies for maintaining performance at scale:

> "Premature optimization is the root of all evil" - Donald Knuth

However, some optimizations should be considered early:

- **CDN Implementation** for static assets
- **Database connection pooling**
- **Horizontal scaling** capabilities
- **Caching strategies** at multiple levels

## Monitoring and Observability

You can't manage what you don't measure. Implement:

- Application performance monitoring (APM)
- Error tracking and alerting
- Business metrics dashboards
- Infrastructure monitoring

---

Building scalable applications requires careful planning, but the investment pays dividends as your application grows.`,
    author: "Mike Rodriguez",
    publishedAt: "2025-01-12T14:15:00Z",
    readTime: "8 min read",
    tags: ["Web Development", "Architecture", "Performance", "Scalability"],
  },
  {
    id: 3,
    title: "The Art of Technical Writing",
    subtitle: "Communicating complex ideas simply and effectively",
    excerpt:
      "Technical writing is a crucial skill for developers and engineers. Master the art of explaining complex concepts in ways that anyone can understand.",
    content: `# The Art of Technical Writing

Technical writing is often overlooked by developers, but it's one of the most valuable skills you can develop. Whether you're writing documentation, blog posts, or API guides, clear communication can make the difference between success and failure.

## Know Your Audience

Before writing a single word, ask yourself:

- Who will be reading this?
- What's their technical background?
- What do they want to achieve?
- What's their context and constraints?

## Structure Is Everything

Good technical writing follows a clear structure:

### 1. Start with the Why

Explain the problem or need before jumping into solutions.

### 2. Provide Context  

Give readers the background they need to understand your content.

### 3. Break Down Complex Concepts

Use the **pyramid principle**:
- Start with conclusions
- Support with key arguments  
- Provide detailed evidence

## Writing Techniques

### Use Active Voice

**Instead of:** "The database was queried by the application"
**Write:** "The application queried the database"

### Be Specific

Vague statements confuse readers:

❌ "This might cause some performance issues"
✅ "This increases response time by approximately 200ms"

### Include Examples

Code examples are worth a thousand words:

\`\`\`python
# Good: Shows actual implementation
def calculate_discount(price, discount_rate):
    """Calculate discounted price with validation."""
    if not 0 <= discount_rate <= 1:
        raise ValueError("Discount rate must be between 0 and 1")
    return price * (1 - discount_rate)
\`\`\`

## Common Pitfalls

Avoid these technical writing mistakes:

1. **Assuming too much knowledge**
2. **Skipping error handling in examples**  
3. **Not testing your own instructions**
4. **Forgetting to update documentation**

## Tools and Resources

Essential tools for technical writers:

> The best technical writing tool is a clear, logical mind combined with empathy for your readers.

- **Grammarly** for grammar checking
- **Hemingway Editor** for readability
- **Notion** or **GitBook** for documentation
- **Mermaid** for diagrams

---

Remember: great technical writing isn't about showing how smart you are—it's about making complex topics accessible to others.`,
    author: "Emily Watson",
    publishedAt: "2025-01-10T09:45:00Z",
    readTime: "6 min read",
    tags: [
      "Technical Writing",
      "Communication",
      "Documentation",
      "Developer Skills",
    ],
  },
  {
    id: 4,
    title: "Machine Learning in Production",
    subtitle: "Deploying ML models at scale",
    excerpt:
      "Moving from Jupyter notebooks to production ML systems requires careful consideration of infrastructure, monitoring, and model management practices.",
    content: `# Machine Learning in Production

Getting machine learning models from development into production is where many projects fail. The gap between a working notebook and a reliable, scalable ML system is often underestimated.

## The Production Challenge

Development environments are forgiving. Production is not:

- **Data drift** changes model performance over time
- **Latency requirements** are strict
- **Availability** must be maintained 24/7
- **Scalability** needs fluctuate unpredictably

## MLOps Pipeline

A robust MLOps pipeline includes:

### 1. Data Pipeline

\`\`\`python
class DataPipeline:
    def __init__(self, config):
        self.config = config
        
    def extract(self):
        # Extract data from various sources
        pass
        
    def transform(self):
        # Clean and preprocess data
        pass
        
    def validate(self):
        # Ensure data quality
        pass
\`\`\`

### 2. Model Training

- **Version control** for models and datasets
- **Experiment tracking** with tools like MLflow
- **Automated retraining** pipelines
- **Model validation** and testing

### 3. Deployment Strategies

Choose the right deployment pattern:

1. **Batch Prediction**
   - Process data in scheduled batches
   - Good for non-real-time use cases
   
2. **Real-time Serving**
   - API endpoints for immediate predictions  
   - Requires low latency infrastructure

3. **Edge Deployment**
   - Models run on user devices
   - Reduces latency and privacy concerns

## Monitoring and Observability

Production ML systems need comprehensive monitoring:

> "In God we trust. All others must bring data." - W. Edwards Deming

### Key Metrics

- **Model Performance**: Accuracy, precision, recall
- **Data Quality**: Schema validation, statistical tests  
- **Infrastructure**: Latency, throughput, error rates
- **Business Metrics**: Revenue impact, user satisfaction

### Alerting Strategies

Set up alerts for:
- Prediction accuracy drops below threshold
- Data distribution changes significantly  
- Infrastructure performance degrades
- Model serving errors increase

## Model Management

### A/B Testing

Test new models safely:

\`\`\`yaml
# Example deployment config
traffic_split:
  model_v1: 90%
  model_v2: 10%
  
success_criteria:
  - accuracy > 0.95
  - latency < 100ms
  - error_rate < 0.1%
\`\`\`

### Rollback Strategies

Always have a plan to revert:
- Keep previous model versions available
- Implement circuit breakers
- Monitor rollback triggers automatically

## Infrastructure Considerations

### Containerization

Docker containers provide:
- Consistent environments
- Easy scaling
- Dependency isolation

### Kubernetes Orchestration

For complex ML workloads:
- Auto-scaling based on demand
- Resource management
- Service discovery
- Rolling updates

---

Production ML is as much about engineering as it is about data science. Invest in robust infrastructure and monitoring from the start.`,
    author: "Dr. James Liu",
    publishedAt: "2025-01-08T16:20:00Z",
    readTime: "10 min read",
    tags: ["Machine Learning", "MLOps", "Production", "Infrastructure"],
  },
];

export const getPostById = (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getRecentPosts = (limit = 10) => {
  return posts
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
};

export type Post = {
  id: string
  title: string
  slug: string
  author: string
  publishDate: string
  status: 'published' | 'draft' | 'archived'
  category: string
  createdAt: string
}

export const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    author: 'John Doe',
    publishDate: '2023-06-01',
    status: 'published',
    category: 'Web Development',
    createdAt: '2023-05-30',
  },
  {
    id: '2',
    title: 'Mastering React Hooks',
    slug: 'mastering-react-hooks',
    author: 'Jane Smith',
    publishDate: '2023-06-15',
    status: 'published',
    category: 'React',
    createdAt: '2023-06-10',
  },
  {
    id: '3',
    title: 'CSS Grid Layout Techniques',
    slug: 'css-grid-layout-techniques',
    author: 'Alice Johnson',
    publishDate: '2023-06-20',
    status: 'draft',
    category: 'CSS',
    createdAt: '2023-06-18',
  },
  {
    id: '4',
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    author: 'Bob Williams',
    publishDate: '2023-07-01',
    status: 'archived',
    category: 'TypeScript',
    createdAt: '2023-06-28',
  },
  {
    id: '5',
    title: 'Building Scalable APIs with Node.js',
    slug: 'building-scalable-apis-with-nodejs',
    author: 'Charlie Brown',
    publishDate: '2023-07-10',
    status: 'published',
    category: 'Backend',
    createdAt: '2023-07-05',
  },
]


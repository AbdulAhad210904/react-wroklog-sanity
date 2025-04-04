export interface Member {
    _id: string
    _createdAt: string
    name: string
    firstName: string
    slug: string
    email: string
    bio: string
    interests: string[]
    image?: string
  }
  
  export interface Log {
    _id: string
    _createdAt: string
    description: string
    hours: number
    memberName: string
    memberId: string
  }
    
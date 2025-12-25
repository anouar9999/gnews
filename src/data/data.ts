import avatarImage1 from '@/images/avatars/Image-1.png'
import avatarImage2 from '@/images/avatars/Image-2.png'
import avatarImage3 from '@/images/avatars/Image-3.png'
import avatarImage4 from '@/images/avatars/Image-4.png'

export async function getListingReviews(handle: string) {
  return [
    {
      id: '1',
      title: "Can't say enough good things",
      rating: 5,
      content: 'Lovely hostess, very friendly! I would definitely stay here again. ',
      author: 'S. Walkinshaw',
      authorAvatar: avatarImage1,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '2',
      title: 'Perfect for going out when you want to stay comfy',
      rating: 4,
      content: 'Excellent place. The host is super friendly, the room is clean and quiet.',
      author: 'Risako M',
      authorAvatar: avatarImage2,
      date: 'May 11, 2021',
      datetime: '2025-01-06',
    },
    {
      id: '3',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content:
        'Very nice and friendly lady. Be pleasant to talk with her. The room looks better than in the pictures. ',
      author: 'Eden Birch',
      authorAvatar: avatarImage3,
      date: 'Aug 22, 2022',
      datetime: '2025-01-06',
    },
    {
      id: '4',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content:
        'Lots of nice restaurants nearby and I tried two of them. I had so limited time in Paris this time and look forward to living here again.',
      author: 'Jonathan Edwards',
      authorAvatar: avatarImage4,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}
export async function getBlogPosts() {
  return [
    {
      id: '1',
      title: 'Test PlayStation 5 Pro : L\'Expérience Gaming Ultime',
      handle: 'ps5-pro-review-ultimate-gaming',
      excerpt:
        'La dernière console de Sony repousse les limites du gaming 4K avec ray tracing, support 120fps, et une fidélité visuelle époustouflante qui transforme notre façon de jouer.',
      featuredImage: {
        src: 'https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/b-l-2-img-1.jpg',
        alt: 'Console PlayStation 5',
        width: 1200,
        height: 800,
      },
      date: '20 Déc 2024',
      datetime: '2024-12-20',
      category: { title: 'Hardware', href: '#' },
      timeToRead: '8 min de lecture',
      views: '15.2k',
      comments: '234',
      author: {
        name: 'Ahmed Bennis',
        avatar: {
          src: '/avatars/ahmed.jpg',
          alt: 'Ahmed Bennis',
        },
        description: 'Spécialiste hardware gaming et testeur tech avec plus de 10 ans d\'expérience.',
      },
    },
    {
      id: '2',
      title: 'Elden Ring DLC: Shadow of the Erdtree - Guide Complet',
      handle: 'elden-ring-shadow-erdtree-guide',
      excerpt:
        'Tout ce dont vous avez besoin pour conquérir l\'expansion massive de FromSoftware. Nouveaux boss, armes, et secrets révélés dans ce guide complet.',
      featuredImage: {
        src: 'https://manufaktursolutions.qodeinteractive.com/wp-content/uploads/2022/10/b-l-2-img-2.jpg',
        alt: 'Scène de Jeu Fantasy',
        width: 1200,
        height: 800,
      },
      date: '18 Déc 2024',
      datetime: '2024-12-18',
      category: { title: 'Guides', href: '#' },
      timeToRead: '12 min de lecture',
      views: '28.5k',
      comments: '456',
      author: {
        name: 'Yasmine Alami',
        avatar: {
          src: '/avatars/yasmine.jpg',
          alt: 'Yasmine Alami',
        },
        description: 'Experte Soulsborne et créatrice de guides gaming.',
      },
    },
    {
      id: '3',
      title: 'RTX 4090 vs RTX 4080: Which GPU Should You Buy?',
      handle: 'rtx-4090-vs-4080-comparison',
      excerpt:
        'In-depth comparison of NVIDIA\'s flagship graphics cards. Performance benchmarks, price analysis, and which one offers the best value for gamers.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1200&auto=format&fit=crop',
        alt: 'Gaming PC Graphics Card',
        width: 1200,
        height: 800,
      },
      date: 'Dec 15, 2024',
      datetime: '2024-12-15',
      category: { title: 'Hardware', href: '#' },
      timeToRead: '10 min read',
      views: '32.1k',
      comments: '567',
      author: {
        name: 'Omar Fathi',
        avatar: {
          src: '/avatars/omar.jpg',
          alt: 'Omar Fathi',
        },
        description: 'PC hardware enthusiast and benchmark specialist.',
      },
    },
    {
      id: '4',
      title: 'CS2 Major 2024: Morocco\'s Team Qualifies for Finals',
      handle: 'cs2-major-morocco-team-finals',
      excerpt:
        'Historic moment for Moroccan esports as local team secures spot in Counter-Strike 2 Major Championship. Interview with the rising stars.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop',
        alt: 'Esports Gaming Setup',
        width: 1200,
        height: 800,
      },
      date: 'Dec 14, 2024',
      datetime: '2024-12-14',
      category: { title: 'Esports', href: '#' },
      timeToRead: '6 min read',
      views: '45.3k',
      comments: '892',
      author: {
        name: 'Karim Zahiri',
        avatar: {
          src: '/avatars/karim.jpg',
          alt: 'Karim Zahiri',
        },
        description: 'Esports journalist covering MENA region competitions.',
      },
    },
    {
      id: '5',
      title: 'Best Gaming Monitors Under 5000 MAD in 2024',
      handle: 'best-gaming-monitors-5000-mad-2024',
      excerpt:
        'Top picks for budget-conscious gamers in Morocco. 144Hz refresh rates, 1ms response times, and stunning visuals without breaking the bank.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&auto=format&fit=crop',
        alt: 'Gaming Monitor Setup',
        width: 1200,
        height: 800,
      },
      date: 'Dec 12, 2024',
      datetime: '2024-12-12',
      category: { title: 'Hardware', href: '#' },
      timeToRead: '7 min read',
      views: '19.8k',
      comments: '234',
      author: {
        name: 'Salma Idrissi',
        avatar: {
          src: '/avatars/salma.jpg',
          alt: 'Salma Idrissi',
        },
        description: 'Gaming peripherals reviewer and tech deals expert.',
      },
    },
    {
      id: '6',
      title: 'GTA 6 Release Date Confirmed: Everything We Know',
      handle: 'gta-6-release-date-confirmed',
      excerpt:
        'Rockstar finally reveals the official release date for Grand Theft Auto 6. New gameplay footage, Vice City details, and next-gen features breakdown.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop',
        alt: 'Video Game Controller',
        width: 1200,
        height: 800,
      },
      date: 'Dec 10, 2024',
      datetime: '2024-12-10',
      category: { title: 'News', href: '#' },
      timeToRead: '5 min read',
      views: '67.9k',
      comments: '1.2k',
      author: {
        name: 'Mehdi Lakhal',
        avatar: {
          src: '/avatars/mehdi.jpg',
          alt: 'Mehdi Lakhal',
        },
        description: 'Gaming news reporter and industry analyst.',
      },
    },
  ]
}
export async function getBlogPostsByHandle(handle: string) {
  // lower case the handle
  handle = handle.toLowerCase()

  const posts = await getBlogPosts()
  const post = posts.find((post) => post.handle === handle)
  return {
    ...post,
    content: 'Lorem ipsum dolor ...',
    tags: ['fashion', 'style', 'trends'],
  }
}

//
export type TListingReivew = Awaited<ReturnType<typeof getListingReviews>>[number]
export type TBlogPost = Awaited<ReturnType<typeof getBlogPosts>>[number]

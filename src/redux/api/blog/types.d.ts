namespace BLOG {
  export type GetBlogRes = {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];

  export type GetBlogReq = void;
}

namespace CONTACTS {
  export type GetContactsRes = {
    id: number;
    instagram: string;
    facebook: string;
    twitter: string;
  }[];

  export type GetContactsReq = void;
}

namespace EVENTS {
  export type GetEventsRes = {
    id: number;
    title: string;
    image: string;
    address: string;
    start_time: string;
    start_end: string;
    start_date: string;
    link: string;
  }[];

  export type GetEventsReq = void;
}

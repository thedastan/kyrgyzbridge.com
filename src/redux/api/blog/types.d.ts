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

export type HomeHeaderData = {
  user: {
    firstName: string;
    avatarUrl: string | null;
    initials: string | null;
  };
  location: {
    city: string;
    region: string;
  };
};

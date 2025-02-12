export interface ProjectDescriptor {
  media: string;
  detail: string;
  portfolios: {
    one: {
      header: string;
      descriptor: string;
    };
    two: {
      header: string;
      descriptor: string;
    };
  };
}
export interface ProjectData {
  title: string;
  association: string;
  hyperlink: string;
  brief: string;
  stack: string[];
  descriptor: ProjectDescriptor;
}

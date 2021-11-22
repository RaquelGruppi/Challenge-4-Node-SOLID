import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(partialUser?: Partial<User>) {
    Object.assign(this, partialUser);

    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { User };

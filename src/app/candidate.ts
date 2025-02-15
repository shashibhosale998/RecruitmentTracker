export class Candidate {

    id?: number; // Optional since it's auto-generated
  firstName!: string;
  lastName!: string;
  email!: string;
  phoneNo!: string;
  dateOfBirth!: string; // Store as 'YYYY-MM-DD' (ISO format)
  gender!: 'Male' | 'Female' | 'Other'; // Use a union type for ENUM
  resume!: string; // Assuming this stores a file path or URL
  createdAt?: string; // Optional since it's auto-generated
}


export interface PartnerFormData {
  companyName: string;
  companyOwner: string;
  email: string;
  whatsapp: string;
  mobileNumber: string;
  city: string;
  country: string;
}

export interface FormErrors {
  companyName?: string;
  companyOwner?: string;
  email?: string;
  whatsapp?: string;
  mobileNumber?: string;
  city?: string;
  country?: string;
}

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone number validation - supports various formats
export const validatePhoneNumber = (phone: string): boolean => {
  // Accepts formats: +1234567890, 01234567890, (123) 456-7890, 123-456-7890, etc.
  // Removes spaces and checks for valid phone format
  const cleanedPhone = phone.replace(/[\s\-\(\)]/g, "");
  // Check if it starts with + or 0, followed by digits (at least 8 digits)
  const phoneRegex = /^(\+?[0-9]{1,4})?[0-9]{8,15}$/;
  return phoneRegex.test(cleanedPhone);
};

// Validate individual field
export const validateField = (name: string, value: string): string | undefined => {
  switch (name) {
    case "companyName":
      if (!value.trim()) {
        return "Company name is required";
      }
      if (value.trim().length < 2) {
        return "Company name must be at least 2 characters";
      }
      if (value.trim().length > 100) {
        return "Company name must be less than 100 characters";
      }
      break;

    case "companyOwner":
      if (!value.trim()) {
        return "Company owner/contact person is required";
      }
      if (value.trim().length < 2) {
        return "Name must be at least 2 characters";
      }
      if (value.trim().length > 100) {
        return "Name must be less than 100 characters";
      }
      break;

    case "email":
      if (!value.trim()) {
        return "Email address is required";
      }
      if (!validateEmail(value.trim())) {
        return "Please enter a valid email address";
      }
      break;

    case "mobileNumber":
      if (!value.trim()) {
        return "Mobile number is required";
      }
      if (!validatePhoneNumber(value.trim())) {
        return "Please enter a valid mobile number";
      }
      break;

    case "whatsapp":
      if (!value.trim()) {
        return "WhatsApp number is required";
      }
      if (!validatePhoneNumber(value.trim())) {
        return "Please enter a valid WhatsApp number";
      }
      break;

    case "city":
      if (!value.trim()) {
        return "City is required";
      }
      if (value.trim().length < 2) {
        return "City name must be at least 2 characters";
      }
      if (value.trim().length > 100) {
        return "City name must be less than 100 characters";
      }
      break;

    case "country":
      if (!value.trim()) {
        return "Country is required";
      }
      if (value.trim().length < 2) {
        return "Country name must be at least 2 characters";
      }
      if (value.trim().length > 100) {
        return "Country name must be less than 100 characters";
      }
      break;

    default:
      return undefined;
  }
  return undefined;
};

// Validate entire form
export const validateForm = (formData: PartnerFormData): { errors: FormErrors; isValid: boolean } => {
  const errors: FormErrors = {};
  
  Object.keys(formData).forEach((key) => {
    const value = formData[key as keyof PartnerFormData];
    const error = validateField(key, value);
    if (error) {
      errors[key as keyof FormErrors] = error;
    }
  });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// Get all field names for touched state
export const getAllFieldNames = (): string[] => {
  return ["companyName", "companyOwner", "email", "whatsapp", "mobileNumber", "city", "country"];
};

// Mark all fields as touched
export const markAllFieldsAsTouched = (): Record<string, boolean> => {
  return getAllFieldNames().reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {} as Record<string, boolean>);
};


"use client"

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle, Users, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { apiFetch, parseUrl } from "@/helpers/apiConfig";
import toast from "react-hot-toast";
import {
  validateField,
  validateForm,
  markAllFieldsAsTouched,
  type FormErrors,
  type PartnerFormData,
} from "@/helpers/validation";

const PartnerJoinForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<PartnerFormData>({
    companyName: "",
    companyOwner: "",
    email: "",
    whatsapp: "",
    mobileNumber: "",
    city: "",
    country: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Mark field as touched when user starts typing
    if (!touched[id]) {
      setTouched((prev) => ({ ...prev, [id]: true }));
    }

    // Clear error when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id as keyof FormErrors];
        return newErrors;
      });
    }

    // Real-time validation if field is touched
    if (touched[id]) {
      const error = validateField(id, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [id]: error }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[id as keyof FormErrors];
          return newErrors;
        });
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    
    const error = validateField(id, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [id]: error }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id as keyof FormErrors];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched immediately
    const allTouched = markAllFieldsAsTouched();
    setTouched(allTouched);
    
    // Validate form before submission
    const { errors: validationErrors, isValid } = validateForm(formData);
    
    // Set errors immediately
    setErrors(validationErrors);
    
    // If form is invalid, prevent submission and scroll to first error
    if (!isValid) {
      // Use requestAnimationFrame to batch DOM reads/writes and avoid forced reflow
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Find first error field and scroll to it
          const firstErrorField = Object.keys(validationErrors)[0];
          if (firstErrorField) {
            const errorElement = document.getElementById(firstErrorField);
            if (errorElement) {
              // Use requestAnimationFrame before scroll to avoid forced reflow
              requestAnimationFrame(() => {
                errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
                // Small delay before focusing to ensure scroll completes
                setTimeout(() => {
                  errorElement.focus();
                }, 300);
              });
            }
          }
        });
      });
      
      toast.error("Please fill in all required form fields before continuing. ⚠️ ", {
        duration: 5000,
        position: "top-right",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append("companyName", formData.companyName);
      formDataToSend.append("companyOwner", formData.companyOwner);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("whatsapp", formData.whatsapp || "");
      formDataToSend.append("mobileNumber", formData.mobileNumber);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("country", formData.country);

      // Send POST request with FormData
      const response = await apiFetch<{ message: string; success?: boolean }>(
        parseUrl.POST_REQUEST,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Show success toast with message from API
      toast.success(
        response.message || "Thank you for your interest. Our team will contact you soon.",
        {
          duration: 5000,
          position: "top-right",
        }
      );

      // Reset form and errors
      setFormData({
        companyName: "",
        companyOwner: "",
        email: "",
        whatsapp: "",
        mobileNumber: "",
        city: "",
        country: "",
      });
      setErrors({});
      setTouched({});
    } catch (error) {
      // Show error toast with message from API
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to submit application. Please try again.";
      
      toast.error(errorMessage, {
        duration: 5000,
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Join Our Partner Program
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Become a SECURESIST partner and help organizations build stronger security cultures. Fill out the form below to get started.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Form */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Partner Application
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Complete the form below and our team will reach out to discuss partnership opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-slate-700">Company Name *</Label>
                    <Input 
                      id="companyName" 
                      placeholder="Your Company Inc." 
                      className={errors.companyName && touched.companyName ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                      value={formData.companyName}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    />
                    {(errors.companyName && touched.companyName) && (
                      <p className="text-sm text-red-600 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyOwner" className="text-slate-700">Company Owner / Contact Person *</Label>
                    <Input 
                      id="companyOwner" 
                      placeholder="John Doe" 
                      className={errors.companyOwner && touched.companyOwner ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                      value={formData.companyOwner}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                    />
                    {(errors.companyOwner && touched.companyOwner) && (
                      <p className="text-sm text-red-600 mt-1">{errors.companyOwner}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="contact@company.com" 
                      className={errors.email && touched.email ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
                       
                    />
                    {(errors.email && touched.email) && (
                      <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-slate-700">WhatsApp Number *</Label>
                      <Input 
                        id="whatsapp" 
                        type="tel" 
                        placeholder="01234567890" 
                        className={errors.whatsapp && touched.whatsapp ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                      />
                      {(errors.whatsapp && touched.whatsapp) && (
                        <p className="text-sm text-red-600 mt-1">{errors.whatsapp}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobileNumber" className="text-slate-700">Mobile Number *</Label>
                      <Input 
                        id="mobileNumber" 
                        type="tel" 
                        placeholder="01234567890" 
                        className={errors.mobileNumber && touched.mobileNumber ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                      />
                      {(errors.mobileNumber && touched.mobileNumber) && (
                        <p className="text-sm text-red-600 mt-1">{errors.mobileNumber}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-slate-700">City *</Label>
                      <Input 
                        id="city" 
                        placeholder="New York" 
                        className={errors.city && touched.city ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                        value={formData.city}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                      />
                      {(errors.city && touched.city) && (
                        <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-slate-700">Country *</Label>
                      <Input 
                        id="country" 
                        placeholder="United States" 
                        className={errors.country && touched.country ? "border-red-500 focus:ring-red-500" : "border-slate-200"}
                        value={formData.country}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                      />
                      {(errors.country && touched.country) && (
                        <p className="text-sm text-red-600 mt-1">{errors.country}</p>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full cursor-pointer bg-blue-700 hover:bg-blue-800 text-white" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Image */}
            <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/partner_image.jpg"
                alt="Partner with SECURESIST"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">Join 500+ Partners Worldwide</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Competitive commission rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Marketing and sales support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Dedicated partner success manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerJoinForm;


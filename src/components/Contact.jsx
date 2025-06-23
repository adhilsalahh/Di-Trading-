import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create email subject and body
      const emailSubject = `Inquiry from ${formData.name}: ${formData.subject}`;
      const emailBody = `
Dear Distinguished Innovations Trading Company,

I am writing to inquire about your products and services.

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Company: ${formData.company}
- Inquiry Type: ${formData.subject}

Message:
${formData.message}

Please contact me at your earliest convenience.

Best regards,
${formData.name}

---
This inquiry was submitted through your website contact form.
      `;
      
      // Create mailto link with proper encoding
      const mailtoLink = `mailto:n.rashid@di-trading.com,info@di-trading.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('');
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['Jeddah 45155', 'PO Box: 52145'],
      color: 'text-rose-700',
      bgColor: 'bg-rose-50'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+966 54515 5050', 'Sun - Thu: 9:00 AM - 6:00 PM'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['n.rashid@di-trading.com', 'info@di-trading.com'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Sunday - Thursday: 9:00 AM - 6:00 PM'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const inquiryTypes = [
    'General Inquiry',
    'Product Information',
    'Price Quote Request',
    'Technical Support',
    'Partnership Opportunity',
    'Bulk Order Inquiry',
    'Service Request',
    'Other'
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to power your next project? Contact our expert team for personalized solutions and competitive quotes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-rose-700 mb-4 md:mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                We're here to help you find the perfect solutions for your needs. 
                Reach out to us through any of the following channels.
              </p>
            </div>

            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`p-2 md:p-3 rounded-lg ${info.bgColor} ${info.color} flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="mb-1">
                        {detail.includes('@') ? (
                          <a
                            href={`mailto:${detail}`}
                            className="text-gray-600 hover:text-rose-700 text-xs md:text-sm block transition-colors duration-200 break-all"
                          >
                            {detail}
                          </a>
                        ) : detail.includes('+966') ? (
                          <a
                            href={`tel:${detail}`}
                            className="text-gray-600 hover:text-rose-700 text-xs md:text-sm block transition-colors duration-200"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-xs md:text-sm">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-rose-700 mb-2">Send Us an Inquiry</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-700 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base"
                      placeholder="Please describe your requirements, project details, or any specific questions you have..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-rose-700 hover:bg-rose-800 text-white py-3 md:py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:shadow-rose-700/25 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium text-sm md:text-base">
                      Thank you! Your inquiry has been prepared and your email client should open shortly. 
                      If it doesn't open automatically, please copy the information and send it manually to our email addresses.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium text-sm md:text-base">
                      There was an error processing your request. Please try again or contact us directly at n.rashid@di-trading.com
                    </p>
                  </div>
                )}
              </form>

              {/* Additional Info */}
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p>We typically respond to inquiries within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Privacy</h4>
                    <p>Your information is secure and will only be used to respond to your inquiry.</p>
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

export default Contact;
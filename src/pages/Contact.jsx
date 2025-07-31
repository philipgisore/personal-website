import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Twitter, Github, Linkedin, MessageCircle, Clock, Globe, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState();
    const [focusedField, setFocusedField] = useState();
    const [errors, setErrors] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    //Intersection Observer for animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1}
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect();
    }, []);

    //Validate form fields
    const validateField = (name, value) => {
        const newErrors = { ...errors };

        switch (name) {
            case 'name':
                if (!value.trim()) {
                    newErrors.name = 'Name is required';
                } else if (value.trim().length < 2) {
                    newErrors.name = 'Name must be atleast 2 characters';
                } else {
                    delete newErrors.name;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    newErrors.email = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    newErrors.email = 'Please enter a valid email address';
                } else {
                    delete newErrors.email;
                }
                break;
            case 'subject':
                if (!value.trim()) {
                    newErrors.subject = 'Subject is required'
                } else if (value.trim().length < 3) {
                    newErrors.subject = 'Subject must be atleastv 3 characters';
                } else {
                    delete newErrors.subject;
                }
                break;

            case 'message':
                if (!value.trim()) {
                    newErrors.message = 'Message is required'
                } else if (value.trim() < 10) {
                    newErrors.message = 'Message must be atleast 10 characters'
                } else {
                    delete newErrors.message;
                }
                break;
        }

        setErrors(newErrors);
        return object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Validate all fields
        let isValid = true;
        Object.keys(formData).forEach(key => {
            if (!validateField(key, formData[key])) {
                isValid = false;
            }
        });

        if (!isValid) return;

        setIsSubmitting(true)

        //Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        //Reset form after succes message
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: ''});
            setErrors({});
        }, 3000);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className={`min-h-screen bg-black py-12 md:py-20 px-4 md:px-8 relative overflow-hidden transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            {/*Animated Background */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.03)_1px, transparent_1px),linear-gradient(90deg,rgba(255,165,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />

                {/*Floating Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/6 rounded-full blur-3xl animate-pulse delay-1000" />

                {/*Animated lines */}
                <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-pulse delay-500" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transpatent animate-pulse-1500" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* header */}
                <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-medium mb-6 px-4 py-2 bg-orange-400/10 rounded-full border border-orange-400/20">
                        <MessageCircle className="w-4 h-4" />
                        GET IN TOUCH
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's work <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">together</span>
                    </h2>

                    <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how we can bring your ideas to life.
                    </p>
                </div>

                {/* Main Content */}
                <div className={`grid lg:grid-cols-3 gap-8 lg:gap-12 items-starts transition-all duration-1000 delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 tranlate-y-10'
                }`}>

                    {/* left side - Contact Info */}
                    <div className="lg:col-span-1 space-y-6 md:space-y-8">

                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">

                            {/* Email Cards */}
                            <div className="group bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4 md:p-6 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-900/80">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="p-2 md:p-3 bg-orange-400/10 rounded-xl group-hover:bg-orange-400/20 transition-colors">
                                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Email Me</h3>
                                        <p className="text-slate-400 text-xs md:text-sm mb-2">Drop me a line anytime</p>
                                        <a 
                                            href="mailto:philipgisore7@gmail.com"
                                            className="text-orange-400 hover:text-orange-300 transition-colors text-sm md:text-base break-all"
                                        >
                                            philipgisore7@gmail.com 
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="group bg-slate-900/70 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4 md:p-6 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-900/80">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="p-2 md:p-3 bg-orange-400/10 rounded-xl group-hover:bg-orange-400/20 transition-colors">
                                        <Phone className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Call Me</h3>
                                        <p className="text-slate-400 text-xs md:text-sm mb-2">Call Any Day</p>
                                        <a 
                                            href="tel:+254723309866"
                                            className="text-orange-400 hover:text-orange-300 transition-colors text-sm md:text-base"
                                        >
                                            +254 790623066
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
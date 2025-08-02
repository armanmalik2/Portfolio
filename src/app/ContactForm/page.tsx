'use client'

import { Mail, MessageCircle, MessageSquare, Phone, Send, ToolCase, User } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Header from "../Header/page";


const ContactForm = () => {
    const [form , setForm] = useState({name: '', email: '', message: '',Subject: '', Phone: ''})

    const handleSubmit = async (e: any) =>{
        e.preventDefault()
        const { data, error } = await supabase.from('messages').insert([form])
        if(error) {
            alert('Error' + error.message)
        } else{
            alert('Message Sent!')
            setForm({name:'',email:'',message:'',Subject:'',Phone:''})
        }
    }

    return(
        <div className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />
        <div className="scale-80 w-full h-fit m-6 mt-0 mb-0 flex justify-center items-center p-0">
            <div className="max-w-150 min-w-80 border border-orange-500 p-10 rounded-2xl shadow1">
                <div className="">
                    <div className="flex">
                        <MessageCircle className="icons w-9 h-9" />
                        <h1 className="text-3xl">Send us a <span className="text-orange-500">Message</span></h1>
                    </div>
                    <p className="text-sm pl-12 mt-3">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
                </div>
                <div className="w-full h-0.25 bg-orange-500 mt-3"></div>
                <form onSubmit={handleSubmit}>
                <div className="mt-6">
                    <label htmlFor="FullName" className="flex"><User className="w-4 mr-2" />Full Name</label>
                    <input type="text" name="FullName" value={form.name} onChange={(e) =>setForm({...form,name:e.target.value})} required id="FullName" placeholder="Arman Malik" className="w-full h-12 p-3 border border-orange-500 rounded-xl bg-transparent hover:bg-neutral-700 focus:outline-0 focus:border-red-700 shadow2"/>
                </div>
                <div className="mt-6">
                    <label htmlFor="Email"  className="flex"><Mail className="w-4 mr-2" />Email Address</label>
                    <input type="text" name="Email" value={form.email} onChange={(e) =>setForm({...form,email:e.target.value})} required  id="Email" placeholder="armanmalik@gmail.com" className="w-full h-12 p-3 border border-orange-500 rounded-xl bg-transparent hover:bg-neutral-700 focus:outline-0 focus:border-red-700 shadow2"/>
                </div>
                <div className="mt-6">
                    <label htmlFor="Phone"  className="flex"><Phone className="w-4 mr-2" />Phone No</label>
                    <input type="number" name="Phone" value={form.Phone} onChange={(e) =>setForm({...form,Phone:e.target.value})} required  id="Phone" placeholder="+91 9876543210" className="w-full h-12 p-3 border border-orange-500 rounded-xl bg-transparent hover:bg-neutral-700 focus:outline-0 focus:border-red-700 shadow2"/>
                </div>
                <div className="mt-6">
                    <label htmlFor="Subject"  className="flex items-center"><ToolCase className="w-4 mr-2" />Subject</label>
                    <input type="text" name="Subject" value={form.Subject} onChange={(e) =>setForm({...form,Subject:e.target.value})} required  id="Subject" placeholder="How can i help you?" className="w-full h-12 p-3 border border-orange-500 rounded-xl bg-transparent hover:bg-neutral-700 focus:outline-0 focus:border-red-700 shadow2"/>
                </div>
                <div className="mt-6">
                    <label htmlFor="Message"  className="flex"><MessageSquare className="w-4 mr-2" />Message</label>
                    <input type="Message" name="Message" value={form.message} onChange={(e) =>setForm({...form,message:e.target.value})} required  id="Message" placeholder="Write your message here..." className="w-full h-30 p-3 border border-orange-500 rounded-xl bg-transparent hover:bg-neutral-700 focus:outline-0 focus:border-red-700 shadow2"/>
                </div>
                <div className="mt-12">
                    <button type="submit" className="w-full h-10 border border-orange-500 rounded-xl bg-transparent flex justify-center items-center hover:bg-orange-700 active:scale-95 focus:outline-0 focus:border-red-700 shadow2">Send Message<Send className="w-4 ml-2 text-orange-500"/></button>
                </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ContactForm;
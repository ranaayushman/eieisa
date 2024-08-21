"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface InstagramPost {
    id: string;
    media_url: string;
    permalink: string;
}

const Socials: React.FC = () => {
    const [posts, setPosts] = useState<InstagramPost[]>([]);

    useEffect(() => {
        // Instagram 
        const fetchInstagramPosts = async () => {
            try {
                const response = await fetch('/api/instagram'); // API needed here, this has to be updated in future
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching Instagram posts", error);
            }
        };

        fetchInstagramPosts();
    }, []);

    return (
        <section id="socials" className="p-20">
            <div className="flex flex-col sm:flex-row justify-center gap-20 mb-8">
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-black hover:text-blue-900">
                    <Image src="/svg/instagram.svg" alt="Instagram" width={40} height={20} />
                    Instagram
                </Link>
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-black hover:text-blue-900">
                    <Image src="/svg/facebook.svg" alt="Facebook" width={40} height={20} />
                    Facebook
                </Link>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2 text-black hover:text-blue-900">
                    <Image src="/svg/linkedin.svg" alt="LinkedIn" width={40} height={20} />
                    LinkedIn
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <a key={post.id} href={post.permalink} target="_blank" rel="noopener noreferrer">
                        <Image src={post.media_url} alt={`Instagram Post ${post.id}`} width={300} height={300} className="rounded-lg" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Socials;

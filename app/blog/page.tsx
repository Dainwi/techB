/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Page() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                    <a href="#">
                        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                            <Image src="/blog.jpg" alt="Blog Post 1" width={600} height={400} className="w-full h-full object-cover" style={{ aspectRatio: '600 / 400', objectFit: 'cover' }} />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-2">
                                <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                                    Technology
                                </span>
                                <span className="text-muted-foreground text-xs font-medium ml-2">August 15, 2023</span>
                            </div>
                            <h2 className="text-xl font-bold mb-2">Introducing the Latest AI-Powered Chatbot</h2>
                            <p className="text-muted-foreground text-sm">
                                Discover how our cutting-edge chatbot technology can transform your customer experience.
                            </p>
                            <div className="flex items-center mt-4">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 mr-2">
                                    <img className="aspect-square h-full w-full" alt="John Doe" src="/logomark.png" />
                                </span>
                                <span className="text-muted-foreground text-sm">John Doe</span>
                            </div>
                        </div>
                    </a>
                </div>
              
            </div>
        </div>

    );
}
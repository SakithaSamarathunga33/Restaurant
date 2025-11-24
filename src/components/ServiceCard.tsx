import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    description: string;
    icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, icon }) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-48 w-full m-4 rounded-2xl overflow-hidden w-[calc(100%-2rem)]">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{icon}</span>
                    <h3 className="text-lg font-bold text-black uppercase tracking-wide">{title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>
                <Link href="#" className="inline-flex items-center text-[#CB3A1A] text-xs font-bold tracking-widest uppercase border border-[#CB3A1A] rounded-full px-6 py-2 hover:bg-[#CB3A1A] hover:text-white transition-colors w-fit">
                    Read More
                    <span className="ml-2">→</span>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;

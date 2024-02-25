import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';
import CardTes from '../Cards/CardTes';
import Banner from './Banner/Banner';
import ShowMobile from '../Cards/ShowMobile';
import ShowTshirt from '../Cards/ShowTshirt';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import ButtonMove from './Button/ButtonMove';
export default function Home() {
    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                <Banner />
                <ButtonMove />
                <div className="py-4">
                    <p className="text-3xl font-black text-gray-900 dark:text-white">Mobile Cover</p>
                </div>
            </div>

            <Card />
            <div className="py-4">
                <p className="text-3xl font-black text-gray-900 dark:text-white">T-Shirt Design</p>
            </div>
            <CardTes />
            <div className="mt-8"> {/* Added margin-top of 8 */}
                <ShowMobile />
            </div>
            <div className='mt-4'>
            <ShowTshirt />
            </div>
            <div className="fixed bottom-4 right-4 z-50">
                <WhatsAppWidget phoneNumber="+919007209647" />
            </div>
        </>


    );
}

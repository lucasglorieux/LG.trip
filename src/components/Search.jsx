import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
  return (
    <div name="search" className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
            <h2>Réserver vos vacances de luxe pour deux personnes</h2>
            <p className='py-4'>
                Le Noku Island resort 5* Luxe est un sanctuaire où ciel et mer se confondent.
                Vous pourrez profiter de nouvelles expériences chaque jour et vous relaxer au Spa
                ou au bord de la piscine. Avec à peine 50 chambres vous séjournerez dans l'intimité 
                la plus totale. Chaque villa est entourée de végétation tropicale et offre une 
                atmosphère de sérénité. Élégance et raffinement sont les maîtres mots de
                l'établissement.
                Pour un séjour des plus tranquilles, bénéficiez d'un accueil en toute sérénité.
                Votre établissement s'engage à respecter les mesures sanitaires en vigueur pour
                assurer votre sécurité et votre bien-être. Dans la plupart des établissements,
                le « pass sanitaire » est obligatoire pour accéder aux infrastructures de loisirs
                et de restaurations. 
            </p>
            </div>
        
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <RiCustomerService2Fill size={45} />
                </button>
                <div className='ml-4'>
                    <h3 className='py-2'>Service de pointe</h3>
                    <p className='py-1'>Hotel de Luxe depuis 30 ans</p>
                </div>
            </div>
            
            <div className='flex flex-col lg:flex-row items-center text-center'>
                <button>
                    <MdOutlineTravelExplore size={45} />
                </button>
                <div className='ml-4'>
                    <h3 className='py-2'>Service de pointe</h3>
                    <p className='py-1'>Hotel de Luxe depuis 30 ans</p>
                </div>
            </div>
          </div>      
        </div>
        <div>
            <div className='border text-center'>
                <p className='pt-2'>15% de réduction supplémentaire</p>
                <p className='py-4'>ENCORE 8H</p>
                <p className='bg-gray-800 text-gray-200 py-2'><a href='/'>Réserver maintenant</a></p>
            </div>
            <form className='w-full'>
                <div className='flex flex-col my-2'>
                    <label>Destinations</label>
                    <select className='border rounded-medium p-2'>
                        <option>Playa del Carmen</option>
                        <option>Tulum</option>
                        <option>Los Cabos</option>
                        <option>Los Angeles</option>
                        <option>Miami</option>
                        <option>Maldives</option>
                        <option>Cuba</option>
                        <option>Laponie</option>
                        <option>Bali</option>

                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <label>Début de séjour</label>
                    <input type='date' className='border rounded-medium p-2'/>
                </div>
                <div className='flex flex-col my-2'>
                    <label>Fin de séjour</label>
                    <input type='date'className='border rounded-medium p-2' />
                </div>
                <button className='w-full my-4'>Vérifier les disponibilités</button>
            </form>
        </div>
    </div>
  )
}

export default Search
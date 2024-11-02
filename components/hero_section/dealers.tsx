'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

const speakerLocations = [
  { 
    id: 1, 
    name: 'Tech Conference Center', 
    address: '123 Tech Blvd, Silicon Valley, CA',
    image: '/placeholder.svg?height=200&width=400'
  },
  { 
    id: 2, 
    name: 'Innovation Hub', 
    address: '456 Startup Ave, New York, NY',
    image: '/placeholder.svg?height=200&width=400'
  },
  { 
    id: 3, 
    name: 'Digital Auditorium', 
    address: '789 Cyber St, Austin, TX',
    image: '/placeholder.svg?height=200&width=400'
  },
  { 
    id: 4, 
    name: 'Future Forum', 
    address: '101 AI Lane, Seattle, WA',
    image: '/placeholder.svg?height=200&width=400'
  },
  { 
    id: 5, 
    name: 'Code Colosseum', 
    address: '202 Developer Dr, Boston, MA',
    image: '/placeholder.svg?height=200&width=400'
  },
]

export default function SpeakerLocations() {
  const [selectedLocation, setSelectedLocation] = useState(speakerLocations[0])

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Where to Listen to Our Speakers</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <ul className="space-y-4">
              {speakerLocations.map((location) => (
                <li key={location.id}>
                  <button
                    onClick={() => setSelectedLocation(location)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedLocation.id === location.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-semibold">{location.name}</h3>
                    <p className="text-sm mt-1 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {location.address}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full">
              <h3 className="font-semibold mb-2 text-center">{selectedLocation.name}</h3>
              <p className="text-sm mb-4 text-center">{selectedLocation.address}</p>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={selectedLocation.image}
                  alt={`Image of ${selectedLocation.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
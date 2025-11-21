import React from 'react'

const PartnerLogosSlide = () => {
  return (
    <section className="py-12 bg-slate-50">
    <div className="container mx-auto px-4">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-slate-500 mb-8">
        Trusted by teams and technology leaders
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="flex items-center justify-center rounded-lg border border-slate-200 bg-white p-6"
          >
            <div className="w-full h-8 bg-slate-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  </section>

  )
}

export default PartnerLogosSlide
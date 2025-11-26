"use client";





import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {parseUrl } from "@/helpers/apiConfig";

export default function PartnerLogosSlide() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" });
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

// DOTO: Updated Get Data By Helper Function in apiCongig.ts

  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch(`${parseUrl.GET_LOGOS}`);

        const data = await res.json();
        const extracted = data?.data?.map((item: any) => item.avatar) || [];

        setLogos(extracted);
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLogos();
  }, []);

  return (
    <section className="py-12 bg-blue-50/40">
      <div className="container mx-auto px-4">
        <p className="text-center text-xl font-medium uppercase tracking-wide text-slate-800 mb-8">
          Trusted by teams and technology leaders
        </p>

        {loading ? (
          <p className="text-center text-slate-500">Loading...</p>
        ) : logos.length === 0 ? (
          <p className="text-center text-slate-500">No partner logos found</p>
        ) : (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex min-w-[40%] sm:min-w-[25%] lg:min-w-[15%] items-center justify-center  "
                >
                  <Image
                    src={logo}
                    alt={`logo-${i}`}
                    width={200}
                    height={200}
                    className="w-auto cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

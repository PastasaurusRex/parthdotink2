"use client"

import * as React from "react"

const clients = [
    { name: "Air Canada", src: "/assets/images/cbc-clients/air-canada.svg" },
    { name: "Bell", src: "/assets/images/cbc-clients/bell.svg" },
    { name: "BetRivers", src: "/assets/images/cbc-clients/betrivers.svg" },
    { name: "Coca-Cola", src: "/assets/images/cbc-clients/coca-cola.svg" },
    { name: "Canadian Tire", src: "/assets/images/cbc-clients/canadian-tire.svg" },
    { name: "Lululemon", src: "/assets/images/cbc-clients/lululemon.svg" },
    { name: "Ozempic", src: "/assets/images/cbc-clients/ozempic.svg" },
    { name: "Petro-Canada", src: "/assets/images/cbc-clients/petro-canada.svg" },
    { name: "RBC", src: "/assets/images/cbc-clients/rbc.svg" },
    { name: "Smartwater", src: "/assets/images/cbc-clients/smartwater.svg" },
    { name: "Sobeys", src: "/assets/images/cbc-clients/sobeys.svg" },
    { name: "StorageVault", src: "/assets/images/cbc-clients/storagevault.svg" },
    { name: "Toyota", src: "/assets/images/cbc-clients/toyota.svg" },
]

export function ClientsTicker() {
    return (
        <div className="relative w-full h-28 overflow-hidden rounded-full border border-muted-foreground/40 flex items-center bg-transparent">
            {/* Fade overlays for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex whitespace-nowrap animate-ticker-scroll hover:[animation-play-state:paused] cursor-default">
                {/* Regular and Duplicates for Seamless Loop */}
                <TickerItems />
                <TickerItems aria-hidden="true" />
                <TickerItems aria-hidden="true" />
            </div>
        </div>
    )
}

function TickerItems({ "aria-hidden": ariaHidden }: { "aria-hidden"?: "true" | "false" }) {
    return (
        <div className="flex items-center shrink-0 px-8 gap-16" aria-hidden={ariaHidden}>
            {clients.map((client) => (
                <div
                    key={client.name}
                    className="flex items-center justify-center w-32 h-16 opacity-60 hover:opacity-100 transition-all duration-300 bg-foreground"
                    style={{
                        maskImage: `url(${client.src})`,
                        WebkitMaskImage: `url(${client.src})`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center'
                    }}
                    title={client.name}
                />
            ))}
        </div>
    )
}

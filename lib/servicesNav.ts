export interface ServiceLink {
  name: string;
  href: string;
}

/** Which set of services a page belongs to. Pages pass this down explicitly. */
export type Region = "sharjah" | "dubai";

export const regionNames: Record<Region, string> = {
  sharjah: "Sharjah",
  dubai: "Dubai",
};

export const sharjahServices: ServiceLink[] = [
  { name: "House Movers", href: "/house-movers-in-sharjah" },
  { name: "Apartment Movers", href: "/apartment-movers-in-sharjah" },
  { name: "Villa Movers", href: "/villa-movers-in-sharjah" },
  { name: "Office Movers", href: "/office-movers-in-sharjah" },
  { name: "Furniture Transfer", href: "/furniture-transfer-in-sharjah" },
  { name: "Packing Services", href: "/packing-services-in-sharjah" },
];

export const dubaiServices: ServiceLink[] = [
  { name: "Villa Movers", href: "/villa-movers-in-dubai" },
  { name: "Office Movers", href: "/office-movers-in-dubai" },
  { name: "House Movers", href: "/house-movers-in-dubai" },
  { name: "Furniture Movers", href: "/furniture-movers-in-dubai" },
  { name: "Apartment Movers", href: "/apartment-movers-in-dubai" },
  { name: "Packing Services", href: "/packing-services-in-sharjah" },
];

export function getServices(region: Region = "sharjah"): ServiceLink[] {
  return region === "dubai" ? dubaiServices : sharjahServices;
}

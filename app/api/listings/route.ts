import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
      rating: 0,
    },
  });

  return NextResponse.json(listing);
}

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  const body = await request.json();
  const { listingId, rating } = body;

  if (!currentUser) {
    return NextResponse.error();
  }

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const result = await prisma.listing.findFirst({
    where: {
      id: listingId,
    },
  });

  if (!result) {
    return NextResponse.error();
  }
  const { id, ...rest } = result;

  const updatedListing = await prisma.listing.update({
    where: { id },
    data: { ...rest, rating },
  });

  return NextResponse.json(updatedListing);
}

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  // Get the current user from Clerk(check if the user is logged in or not using Clerk)
  const user = await currentUser();
  if (!user) {
    return null;
  }

  // If user is logged in, check if the user exists in the database(supabase)
  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // if we have a logged in user, return the user
    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    const email = user.emailAddresses[0].emailAddress;

    // If the user does not exist in the database, create a new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        email,
        imageUrl: user.imageUrl,
      },
    });

    return newUser;

  } catch (error) {
    console.log(error.message);
  }
};

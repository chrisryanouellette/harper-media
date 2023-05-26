import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

exports.beforeCreate = functions.auth.user().beforeCreate(async (user) => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    databaseURL: process.env.PUBLIC_FIREBASE_DATABASE_URL,
  });

  try {
    const db = admin.firestore();
    const docs = await db
      .collection("users")
      .where("email", "==", user.email)
      .get();

    const doc = docs.docs[0];

    if (!doc.exists) {
      throw new functions.auth.HttpsError(
        "internal",
        "Unable to find validated user document"
      );
    }
  } catch (error) {
    throw new functions.auth.HttpsError(
      "internal",
      "Unable to load document from firestore"
    );
  }
});

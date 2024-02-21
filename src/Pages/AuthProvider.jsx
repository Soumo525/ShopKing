import { Databases, ID, Query } from "appwrite";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { account, database, storage } from "../appwrite/appwriteConf";
import { useNavigate } from "react-router-dom";
import conf from "../conf/conf";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  // const bucketIdsArray = conf.appwriteBucketId.split(',').map(id => id.trim()); // get the first bucket id if there are multiple separated by ,
  // const firstBucketId = bucketIdsArray[0];
  // const secondBucketId = bucketIdsArray[1]; // secondBucketId
  // const collectionArray = conf.appwriteCollectionId.split(',').map(id => id.trim()); // get the first COLLECTION id if there are multiple separated by ,
  // const firstcollectionId = collectionArray[0];
  // const secondcollectionId = collectionArray[1]; // second COLLECTION id

  const navigate = useNavigate();

  const [loading, setLoading] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    //setLoading(false)
    checkUser();
  }, []);

  const loginUser = async (userInfo) => {
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/admin/control");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logoutUser = async () => {
    try {
      await account.deleteSession('current');
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  const checkUser = async () => {
    try {
      let check = await account.get()
      setUser(check)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  }
// Databases 
// Mobile
 const addToDabase  = async({ productTitle, productDes, price, catagory , imagekey}) => {
  try {
    const userId = user.$id;
    const data = {
       productTitle, productDes, price, catagory , imagekey, userId
    }
    const pro = await database.createDocument(
      conf.appwriteDatabaseId,
      //firstcollectionId, // 1st collection id
      conf.appwriteCollectionId_1, // collection Id
      ID.unique(),
      data
    );
    console.log("Database" , pro);
  } catch (error) {
    console.error(error);
  }
 }

 // Image Upload 
const uploadImage = async (file) => {
  setLoading(true);
  try {
    const res = await storage.createFile(
      //firstBucketId, // Bucket ID
      conf.appwriteBucketId_1, // bucket Id
      ID.unique(), // File name
      file // File object
    );
    setLoading(false);
    return res.$id;
  } catch (error) {
    console.error(error);
    setLoading(false);
    throw new Error('Failed to upload image');
  }
};

// show product 
const [ imgListNew, setimgListNew] = useState([])
const imageList = async()=>{ 
 try {
  const img = await storage.listFiles(
    //firstBucketId // Bucket ID
    conf.appwriteBucketId_1 // bucket Id

  )
  setimgListNew(img.files);
  //console.log("Images",img.files);
 } catch (error) {
  console.error(error);
 }
}
// queries = [Query.select(["productTitle","productDes", "price","catagory" , "imagekey"])]
// const getPost = async(queries = [Query.select(["productTitle","productDes", "price","catagory" , "imagekey"])])
  const [ postNew, setPostNew ] = useState([])
  const getPost = async() => {
    try {
      const data = await database.listDocuments(
        conf.appwriteDatabaseId, // Database ID
        //firstcollectionId, // Collection ID 1st 
        conf.appwriteCollectionId_1, // collection id 1
        // queries
      )
      setPostNew(data.documents);
     //console.log("Data",data.documents);
    } catch (error) {
      console.error(error);
    }
  }

// Delete Mobile Post
const deleteMobilePost = async (documentId) => {
  try {
      await database.deleteDocument(
      conf.appwriteDatabaseId, // Database ID
      //firstcollectionId, // Collection ID
      conf.appwriteCollectionId_1, // collection id
      documentId  // Document ID
    );
    setPostNew((prevList) => prevList.filter((docId)=> docId.$id !== documentId));
  } catch (error) {
    console.error(error);
  }
}
// Delete Mobile Image 

const  deleteMobileImage = async (imageId) => {
try {
  await storage.deleteFile(
    //firstBucketId,
    conf.appwriteBucketId_1, // Bucket ID
    imageId
  );
  setimgListNew((prevList) => prevList.filter((x) => x.$id !== imageId))
} catch (error) {
  console.error(error);
}
}


/// T-Shirt Post

// Databases 

const addToTShirt  = async({ productTitle, productDes, price, catagory , imagekey}) => {
  setLoading(true);
  try {
    const userId = user.$id;
    // const dataT = {
    //   productTitle, productDes, price, catagory , imagekey, tUserId
    // }
    // console.log(dataT);
    const pro = await database.createDocument(
      conf.appwriteDatabaseId,
      //secondcollectionId,
      conf.appwriteCollectionId_2,
      ID.unique(),
      {
        productTitle, productDes, price, catagory , imagekey, 	userId
      }
    );
    //console.log("Database for T-Shirt" , pro);
  } catch (error) {
    console.error(error);
  }
  setLoading(false);
 };

 // T-Shirt Image Upload 
 
 const uploadT_image = async (file) => {
   setLoading(true);
   try {
     const res = await storage.createFile(
       //secondBucketId, // Bucket ID
       conf.appwriteBucketId_2, // Bucket ID
       ID.unique(), // File name
       file // File object
     );
     setLoading(false);
     return res.$id;
   } catch (error) {
     console.error(error);
     setLoading(false);
     throw new Error('Failed to upload image');
   }
 };

// show T-Shirt image
const [ imageTshirt, setImageTshirt] = useState([])
const imageListTshirt = async()=>{ 
 try {
  const img = await storage.listFiles(
    //secondBucketId // 2nd Bucket ID
    conf.appwriteBucketId_2

  )
  setImageTshirt(img.files);
  //console.log("Images",img.files);
 } catch (error) {
  console.error(error);
 }
}
// Post show
  // queries = [Query.select(["productTitle","productDes", "price","catagory" , "imagekey"])]
  // const getPostTshirt = async(queries = [Query.select(["productTitle","productDes", "price","catagory" , "imagekey"])])
  const [ showPostTshirt, setShowPostTshirt ] = useState([])
  const getPostTshirt = async() => {
    try {
      const data = await database.listDocuments(
        conf.appwriteDatabaseId, // Database ID
        //secondcollectionId, // 2nd Collection ID 1st 
        conf.appwriteCollectionId_2, // Collection ID
        //queries
      )
      setShowPostTshirt(data.documents);
      //console.log("Data for Tshirt",data.documents);
    } catch (error) {
      console.error(error);
    }
  }

// Delete Tshirt Post
  const deleteTshirtPost = async(documentId) =>{
    try {
      await database.deleteDocument(
      conf.appwriteDatabaseId, // Database ID
      //secondcollectionId, // 2nd Collection ID
      conf.appwriteCollectionId_2, // Collection ID
      documentId  // Document ID
    );
    setShowPostTshirt((prevList) => prevList.filter((docId)=> docId.$id !== documentId));
  } catch (error) {
    console.error(error);
  }
  }
// Delete Tshirt Image

const deleteTshirtImage = async(imageId) => {
  try {
    await storage.deleteFile(
      //secondBucketId,
      conf.appwriteBucketId_2, // Bucket ID
      imageId
    );
    setImageTshirt((prevList) => prevList.filter((x) => x.$id !== imageId))
  } catch (error) {
    console.error(error);
  }
}

  const data = {
    user,
    loginUser,
    logoutUser,
    addToDabase,
    uploadImage,
    imgListNew,
    imageList,
    getPost,
    postNew,
    addToTShirt,
    uploadT_image,
    imageListTshirt,
    imageTshirt,
    showPostTshirt,
    getPostTshirt,
    deleteMobilePost,
    deleteMobileImage,
    deleteTshirtPost,
    deleteTshirtImage
  };

  return (
    <AuthContext.Provider value={data}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

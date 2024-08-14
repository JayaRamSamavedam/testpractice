import Student from "../schema/studentSchema.js";

export const createStudent = async(req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(206).json({ error: "Please provide all the details" });
    }

    try {
        const stu = new Student({ id, name });
        await stu.save();
        console.log("Student saved successfully");
        return res.status(201).json({ message: "Student is successfully created" });
    } catch (error) {
        console.error("Error saving student:", error);

        // Check if the error is a validation error
        if (error.name === "ValidationError") {
            return res.status(400).json({ error: "Validation error: " + error.message });
        }

        // Check if the error is a MongoDB duplicate key error
        if (error.code && error.code === 11000) {
            return res.status(409).json({ error: "Duplicate entry error: " + error.message });
        }

        // Handle other types of errors (e.g., database connection issues)
        return res.status(500).json({ error: "Internal Server Error: " + error.message });
    }
}


export const deleteStudent = async(req,res)=>{
    const id=req.params.id;
    if(!id){
        return res.status(400).json({error:"id not found"});
    }
    try{
        const stu = await Student.findOneAndDelete({id:id});
        if(!stu){
            return res.status(404).json({error:"student not found"});
        }
        console.log("student deleted");
        return res.status(200).json({message:"student deleted sucessfully"});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
}
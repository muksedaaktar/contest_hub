import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EditContest = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "UI Design Contest",
      price: 20,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Contest updated successfully");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6">Edit Contest</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input {...register("name")} className="input" />
        <input {...register("price")} className="input" />
        <button className="btn bg-orange-400 hover:bg-orange-600 text-white">Update</button>
      </form>
    </div>
  );
};

export default EditContest;

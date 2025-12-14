import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

const AddContest = () => {
  const { register, handleSubmit, reset } = useForm();
  const [deadline, setDeadline] = useState(new Date());

  const onSubmit = (data) => {
    const contestData = {
      ...data,
      deadline,
      status: "pending",
    };

    console.log("New Contest:", contestData);

    toast.success("Contest submitted for approval");
    reset();
    setDeadline(new Date());
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add New Contest</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <input
          {...register("name", { required: true })}
          placeholder="Contest Name"
          className="input"
        />
        <input
          {...register("image", { required: true })}
          placeholder="Image URL"
          className="input"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="textarea"
        />
        <input
          type="number"
          {...register("price", { required: true })}
          placeholder="Price"
          className="input"
        />
        <input
          type="number"
          {...register("prize", { required: true })}
          placeholder="Prize Money"
          className="input"
        />
        <textarea
          {...register("task", { required: true })}
          placeholder="Task Instruction"
          className="textarea"
        />
        <select {...register("type", { required: true })} className="input">
          <option value="">Select Contest Type</option>
          <option>Coding</option>
          <option> Writing</option>
          <option>Quize</option>
          <option>Math</option>
          <option>Photography</option>
        </select>

        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          className="input"
        />

        <button type="submit" className="btn bg-orange-400 hover:bg-orange-600 text-white">
          Submit Contest
        </button>
      </form>
    </div>
  );
};

export default AddContest;

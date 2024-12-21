"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const TicketForm = () => {
  const router = useRouter();
    const startingTicketData = {
        title: "Hello this is beast",
        description: "FYD regret ",
        priority: 0,
        category: "Hardware Problem",
        progress: 1,
        status: "Not Started"
    }
    const [formdata, setFormData] = useState(startingTicketData);

    const handleSubmit = async (e) => {
      e.preventDefault();  // Prevent default form submission behavior
      console.log(formdata); // You can send this data to an API or do something else
    
      // Corrected API request
      const res = await fetch('/api/Tickets', {
        method: "POST",
        body: JSON.stringify(formdata), // Send formdata directly, not wrapped inside an object
        headers: {
          "Content-Type": "application/json"  // Correct header for content type
        }
      });
    
      if (!res.ok) {
        throw new Error("Failed to create the Ticket");
      }
    
      // Assuming you are using Next.js' router
      router.refresh();
      router.push("/");
    };


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className='flex justify-center'>
            <form className='flex flex-col' method='post' onSubmit={handleSubmit}>
                <h3 className='ml-7 text-2xl'>Create Your Ticket</h3>

                <label>Title</label>
                <input
                    type='text'
                    id="title"
                    name="title"
                    onChange={handleChange}
                    required={true}
                    value={formdata.title}
                />

                <label>Description</label>
                <textarea
                    type='text'
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={formdata.description}
                    
                ></textarea>

                <label>Category</label>
                <select
                    id="category"
                    name="category"
                    onChange={handleChange}
                    value={formdata.category}
                >
                    <option value="Hardware_problem">HardWare Problem</option>
                    <option value="Software_problem">SoftWare Problem</option>
                    <option value="Project_management_problem">Project Management Problem</option>
                </select>

                <div className='flex gap-2'>
                    <input
                        type="radio"
                        id="1"
                        name="priority"
                        onChange={handleChange}
                        value={1}
                        checked={formdata.priority == 1}
                    />
                    <label>1</label>

                    <input
                        type="radio"
                        id="2"
                        name="priority"
                        onChange={handleChange}
                        value={2}
                        checked={formdata.priority == 2}
                    />
                    <label>2</label>

                    <input
                        type="radio"
                        id="3"
                        name="priority"
                        onChange={handleChange}
                        value={3}
                        checked={formdata.priority == 3}
                    />
                    <label>3</label>

                    <input
                        type="radio"
                        id="4"
                        name="priority"
                        onChange={handleChange}
                        value={4}
                        checked={formdata.priority == 4}
                    />
                    <label>4</label>

                    <input
                        type="radio"
                        id="5"
                        name="priority"
                        onChange={handleChange}
                        value={5}
                        checked={formdata.priority == 5}
                    />
                    <label>5</label>
                </div>

                <label>Progress</label>
                <input
                    type='range'
                    id="progress"
                    name='progress'
                    value={formdata.progress}
                    min='0'
                    max="100"
                    onChange={handleChange}
                />

                <label>Status</label>
                <select
                    id="status"
                    name="status"
                    onChange={handleChange}
                    value={formdata.status}
                >
                    <option value="Not Started" className='text-red-700'>Not Started</option>
                    <option value="Started" className='text-yellow-500'>Started</option>
                    <option value="Done" className='text-green-500'>Done</option>
                </select>

                <button type="submit" className='btn' id='submit'>Submit</button>
            </form>
        </div>
    )
}

export default TicketForm

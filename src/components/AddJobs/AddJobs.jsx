import React, { useState, useEffect, useContext } from "react";
import JobContext from "../../Context/JobContext";
import authContext from "../../Context/AuthContext";

function AddJobs() {
  const [fetchJob, useFetchedJob] = useState({
    company: "",
    role: "",
    status: "Applied",
    note: "",
    appliedDate: ""
  });

  const { setJobs } = useContext(JobContext)
  const { user } = useContext(authContext)

 const handleJobs = () => {
    e.preventDefault()

    const newJob = {
    company: fetchJob.company,
    role: fetchJob.role,
    status: fetchJob.status,
    note: fetchJob.note,
    appliedDate: new Date().toISOString().split("T")[0]
    }
    setJobs((prev) => {
        const updatedJobs = [...prev, newJob]
        localStorage.setItem(`jobs_${user.username}`, JSON.stringify(updatedJobs))
        return updatedJobs
    })

    //reset Job form
    

 }

  return (
    <>
      <form
        onSubmit={handleJobs}
        className="max-w-lg w-full mx-auto mt-12 p-6 rounded-xl bg-neutral-900/60 border border-white/10 backdrop-blur-sm flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="companyName" className="text-sm text-neutral-400">Company: </label>
          <input
            type="text"
            id="companyName"
            value={fetchJob.company}
            onChange={(e) =>
              useFetchedJob({ ...fetchJob, company: e.target.value })
            }
            placeholder="company name..."
            required
            className="px-3 py-2 rounded-md bg-neutral-950 text-white placeholder-white/40 outline-none border border-white/10 focus:border-amber-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="role" className="text-sm text-neutral-400">Role: </label>
          <input
            type="text"
            id="role"
            list="roles"
            value={fetchJob.role}
            onChange={(e) =>
              useFetchedJob({ ...fetchJob, role: e.target.value })
            }
            placeholder="set role..."
            required
            className="px-3 py-2 rounded-md bg-neutral-950 text-white placeholder-white/40 outline-none border border-white/10 focus:border-amber-500"
          />
          <datalist id="roles">
            <option value="SDE Intern" />
            <option value="Software Engineer Intern" />
            <option value="SDE-1" />
            <option value="Software Engineer I" />
            <option value="SDE-2" />
            <option value="Software Engineer II" />
            <option value="Senior Software Engineer" />
            <option value="Staff Software Engineer" />
            <option value="Backend Engineer" />
            <option value="Frontend Engineer" />
            <option value="Full Stack Engineer" />
            <option value="Consultant" />
            <option value="Associate Consultant" />
            <option value="Data Engineer" />
            <option value="Data Analyst" />
            <option value="DevOps Engineer" />
            <option value="Platform Engineer" />
            <option value="QA Engineer" />
            <option value="Automation Engineer" />
          </datalist>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="status" className="text-sm text-neutral-400">Status:</label>
          <select
            name="status"
            id="status"
            value={fetchJob.status}
            onChange={(e) => useFetchedJob({ ...fetchJob, status: e.target.value })}
            className="px-3 py-2 rounded-md bg-neutral-950 text-white placeholder-white/40 outline-none border border-white/10 focus:border-amber-500"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value=" Offer"> Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="note" className="text-sm text-neutral-400">Note</label>
          <textarea
            id="note"
            name="note"
            value={fetchJob.note}
            onChange={(e) => useFetchedJob({...fetchJob, note: e.target.value})}
            placeholder="Add any notes (interview feedback, follow-up, etc.)"
            rows="4"
            className="px-3 py-2 rounded-md bg-neutral-950 text-white placeholder-white/40 outline-none border border-white/10 focus:border-amber-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-2.5 rounded-md bg-amber-500/90 text-black font-medium hover:bg-amber-500 transition"
        >
          Add Job
        </button>
      </form>
    </>
  );
}

export default AddJobs;

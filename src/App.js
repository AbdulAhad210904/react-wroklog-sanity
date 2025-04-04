"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import MemberPage from "./pages/MemberPage"
import { client } from "./lib/sanityClient"
import "./App.css"

function App() {
  const [members, setMembers] = useState([])
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch members
        const membersData = await client.fetch(`
          *[_type == "member"] | order(name asc) {
            _id,
            _createdAt,
            name,
            firstName,
            slug,
            email,
            bio,
            interests,
            "image": image.asset->url
          }
        `)

        // Fetch logs
        const logsData = await client.fetch(`
          *[_type == "log"] | order(_createdAt desc) {
            _id,
            _createdAt,
            description,
            hours,
            "memberName": member->name,
            "memberId": member->_id
          }
        `)

        setMembers(membersData)
        setLogs(logsData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <Router>
      <div className="app">
        <Header members={members} />
        <Routes>
          <Route path="/" element={<HomePage members={members} logs={logs} />} />
          <Route path="/:memberSlug" element={<MemberPage members={members} logs={logs} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


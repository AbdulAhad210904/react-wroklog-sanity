import { formatDate } from "../lib/utils"

function WorkLog({ logs, memberId = null }) {
  // Filter logs by member ID if provided
  const filteredLogs = memberId ? logs.filter((log) => log.memberId === memberId) : logs

  return (
    <div className="work-log">
      <table className="log-table">
        <tbody>
          {filteredLogs.map((log) => (
            <tr key={log._id} className="log-row">
              <td className="log-cell">{formatDate(log._createdAt)}</td>
              <td className="log-cell">{log.memberName}</td>
              <td className="log-cell">{log.description}</td>
              <td className="log-cell">{log.hours} timer</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WorkLog



import { useParams } from 'react-router-dom'

function ProfileDetails() {
  const {id} = useParams()
  return (
    <div>ProfileDetails{id}</div>
  )
}

export default ProfileDetails
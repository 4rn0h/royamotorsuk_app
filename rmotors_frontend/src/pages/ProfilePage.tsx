import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get(`${API_BASE_URL}/users/profile/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Failed to fetch profile:', err);
      }
    };

    fetchProfile();
  }, []);

  if (!userData) return <p className="text-center mt-10 text-primary">Loading profile...</p>;

  return (
    <div className="container-custom py-16">
      <h2 className="text-3xl font-heading mb-4">Your Profile</h2>
      <div className="bg-muted rounded-lg shadow p-6 space-y-4">
        <p><strong>Username:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Role:</strong> {userData.role}</p>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import './Profile.css';

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const storedUser = localStorage.getItem('userData');
    const user = storedUser ? JSON.parse(storedUser) : {
        name: "Guest",
        email: "guest@example.com",
        moviesWatched: 0,
        watchlistCount: 0,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Guest"
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        window.dispatchEvent(new Event('authChange'));
        navigate('/login');
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const updatedUser = { ...user, avatar: reader.result as string };
                localStorage.setItem('userData', JSON.stringify(updatedUser));
                window.dispatchEvent(new Event('authChange'));
                window.location.reload();
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-avatar-wrapper">
                    <img src={user.avatar} alt="Profile Avatar" className="profile-avatar" />
                    <label htmlFor="photo-upload" className="photo-edit-overlay">
                        <FaCamera />
                    </label>
                    <input
                        type="file"
                        id="photo-upload"
                        hidden
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />
                </div>
                <div className="profile-info">
                    <h1>{user.name}</h1>
                    <span className="profile-email">{user.email}</span>
                </div>

                <div className="profile-stats">
                    <div className="stat-item">
                        <span>{user.moviesWatched}</span>
                        <label>Watched</label>
                    </div>
                    <div className="stat-item">
                        <span>{user.watchlistCount}</span>
                        <label>In List</label>
                    </div>
                </div>

                <div className="profile-actions">
                    <button className="edit-profile-btn">Edit Profile</button>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;

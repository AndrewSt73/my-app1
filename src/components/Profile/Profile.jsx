import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
        </div>

        <div>Avat + descr</div>

        <MyPosts />


        
        
      </div>
    )

    
}
export default Profile;
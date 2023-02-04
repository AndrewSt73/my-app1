import s from './Profile.module.css';
const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'></img>
        </div>

        <div className={s.posts}>
          <div className={s.item}>
            av + descr
          </div>

          <div className={s.item}> 
            my posts
          </div>
        </div>

        
        
      </div>
    )

    
}
export default Profile;
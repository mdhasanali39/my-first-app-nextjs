import styles from './button.module.css'

const Button = ({btnName,icon:Icon }) => {
    return (
        <button className={`${styles.button}  bg-gradient-to-r from-blue-300 to-red-300`}>
          {btnName}
          <Icon className={`${styles.icon}`}/>
        </button>
    );
};

export default Button;
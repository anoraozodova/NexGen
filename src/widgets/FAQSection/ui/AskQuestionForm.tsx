import { useQuestionForm } from '../model/useQuestionForm';
import { Input } from '../../../shared/Input/ui/Input';
import { Textarea } from '../../../shared/Input/ui/Textarea/Textarea';
import styles from './AskQuestionForm.module.scss';

export const AskQuestionForm = () => {
    const { formData, errors, updateField, handleSubmit } = useQuestionForm();

    return (
        <div className={styles.form}>
            <h4 className={styles.form__title}>ASK YOUR QUESTION</h4>
            <hr className={styles.line} />
            <div className={styles.form__fields}>
                <div className={styles.form__field}>
                    <Input
                        label="NAME"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(value) => updateField('name', value)}
                    />
                    {errors.name && (
                        <span className={styles.form__error}>
                            {errors.name}
                        </span>
                    )}
                </div>

                <div className={styles.form__field}>
                    <Input
                        label="EMAIL"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(value) => updateField('email', value)}
                    />
                    {errors.email && (
                        <span className={styles.form__error}>
                            {errors.email}
                        </span>
                    )}
                </div>

                <div className={styles.form__field}>
                    <Textarea
                        label="YOUR QUESTION"
                        placeholder="Enter Your Question Here......"
                        value={formData.question}
                        onChange={(value) => updateField('question', value)}
                    />
                    {errors.question && (
                        <span className={styles.form__error}>
                            {errors.question}
                        </span>
                    )}
                </div>

                <button
                    className={styles.form__button}
                    onClick={handleSubmit}
                >
                    SEND YOUR MESSAGE
                </button>
            </div>
        </div>
    );
};
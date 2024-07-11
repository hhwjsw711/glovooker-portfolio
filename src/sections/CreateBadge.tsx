import { RefObject, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionsReferences } from '../pages/Home';
import { Button } from '../components/Button/Button';
import { FiSend } from 'react-icons/fi';
import TextField from '../components/TextField/TextField';

interface Props {
    onSubmit: (userData: { firstName: string; lastName: string }) => void;
    reference: RefObject<HTMLElement>;
    sectionsRef: SectionsReferences;
}

const CreateBadge: React.FC<Props> = ({ onSubmit, reference }) => {
    const { t } = useTranslation('create_badge');

    const [toSend, setToSend] = useState({
        firstName: '',
        lastName: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setToSend({
            ...toSend,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSubmit({
            firstName: toSend.firstName,
            lastName: toSend.lastName,
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section
            id="badge"
            ref={ reference }
            className="bg-white overflow-hidden relative flex flex-col lg:flex-row lg:items-center"
        >

            <div className="py-12 px-16 w-full md:px-8 lg:py-20 lg:px-20 z-20 justify-center 3xl:w-1/2">
                <h2 className="text-3xl md:text-4xl font-circularblack text-glovooker-chamoisee-100 mb-4 max-w-3xl">
                    <span className="block">{ t('title') }</span>
                </h2>
                <form onSubmit={ handleSubmit }>
                    <TextField label={ t('first_name').toString() } name={ 'firstName' } value={ toSend.firstName } onChange={ handleChange } isRequired />
                    <TextField label={ t('last_name').toString() } name={ 'lastName' } value={ toSend.lastName } onChange={ handleChange } isRequired />
                    <Button
                        label={ t('apply_changes').toString() }
                        icon={ <FiSend className="ml-2 h-5 w-5" /> }
                        type={ 'submit' }
                    />
                </form>
            </div>
        </section>
    );
};

export default CreateBadge;

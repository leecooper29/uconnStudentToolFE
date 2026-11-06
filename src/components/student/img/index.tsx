import "../index.css"

type StudentImageProps = {
	student: { name: string },
	label: { text: string }
};

function StudentImage({ student, label }: StudentImageProps){
	return (
		<>
		    <div
            	role="img"
                className="profile-image-large"
                >
                {student.name.charAt(0).toUpperCase()}
            </div>
		</>
	)
}

export default StudentImage;
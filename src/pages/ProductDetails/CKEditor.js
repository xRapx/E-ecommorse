import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorContext = () => {
	const [ckeditor, setCkeditor] = useState("")
	const [list, setList] = useState([])
  
	function formData(e) {
	  e.preventDefault()
	  setList([...list, ckeditor ])
	  setCkeditor("")
	}
  
	return (		
		<div>			
		<h2>Using the CKEditor&nbsp;5 context feature in React</h2>
		<div>
			{list.map((res, index) => (
				<ul key={index}><li>{res}</li></ul>
			))}
		</div>
		<form onSubmit={formData}>
			<CKEditor
				editor={ ClassicEditor }
				data={ckeditor}
				onReady={ editor => {
					// You can store the "editor" and use when it is needed.
					// editor.editing.view.change((write) => {
					//   write.setStyle("height" , "200px" , editor.editing.view.document.getRoot())
					// })
					// console.log(`Editor data here ====> : `,editor)
				} }  
				onChange={(event , editor) => {
					const data = editor.getData()
					setCkeditor(data)
				} }
			/>
				<div className="my-4 flex justify-end">
				<button className="bg-blue-500 text-white py-2 px-4 focus:outline-none" type='submit'>
					Save
				</button>
				</div>
		</form>
		</div>
	)
}

export default CKEditorContext;

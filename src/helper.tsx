import Swal from 'sweetalert2';

export const handleDelete = async (id: string, onDelete: (id: string) => void) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      await fetch(`https://67a65b06510789ef0dfb3030.mockapi.io/api/movie/todo/${id}`, {
        method: 'DELETE',
      });
      onDelete(id);
      Swal.fire('Deleted!', 'Your todo has been deleted.', 'success');
    } catch (error) {
      console.error('Delete error:', error);
      Swal.fire('Error!', 'Something went wrong while deleting.', 'error');
    }
  }
};


export const handleEdit = async (
  todo: { id: string; title: string; description: string },
  onEdit: (updatedTodo: { id: string; title: string; description: string }) => void
) => {
  const { value: title } = await Swal.fire({
    title: "Edit Todo Title",
    input: "text",
    inputValue: todo.title,
    inputAttributes: {
      autocapitalize: "off",
      maxlength: "50",
      placeholder: "Enter new title"
    },
    showCancelButton: true,
    confirmButtonText: "Next",
    showLoaderOnConfirm: true,
    preConfirm: (titleInput) => {
      if (!titleInput.trim()) {
        Swal.showValidationMessage("Title cannot be empty");
      }
      return titleInput.trim();
    },
    allowOutsideClick: () => !Swal.isLoading()
  });

  if (!title) return; 

  const { value: description } = await Swal.fire({
    title: "Edit Todo Description",
    input: "textarea",
    inputValue: todo.description,
    inputAttributes: {
      placeholder: "Enter new description",
      rows: 4,
      style: "resize: none;"
    },
    showCancelButton: true,
    confirmButtonText: "Save",
    showLoaderOnConfirm: true,
    preConfirm: (descInput) => {
      if (!descInput.trim()) {
        Swal.showValidationMessage("Description cannot be empty");
      }
      return descInput.trim();
    },
    allowOutsideClick: () => !Swal.isLoading()
  });

  if (!description) return; 


  try {
    await fetch(`https://67a65b06510789ef0dfb3030.mockapi.io/api/movie/todo/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    onEdit({ id: todo.id, title, description });
    Swal.fire('Updated!', 'Your todo has been successfully updated.', 'success');
  } catch (error) {
    console.error('Edit error:', error);
    Swal.fire('Error!', 'Something went wrong while updating.', 'error');
  }
};

interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}

export const handleStatusChange = async (todo: Todo, updateStatusCallback: (updatedTodo: Todo) => void) => {
  const result = await Swal.fire({
    title: 'Mark as completed?',
    text: "Are you sure you want to mark this todo as completed?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, complete it!',
    cancelButtonText: 'No, keep pending'
  });

  if (result.isConfirmed) {
    try {
      await fetch(`https://67a65b06510789ef0dfb3030.mockapi.io/api/movie/todo/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...todo, status: "completed" })
      });

      updateStatusCallback({ ...todo, status: "completed" });
      Swal.fire('Updated!', 'Todo has been marked as completed.', 'success');
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire('Error!', 'Could not update todo status.', 'error');
    }
  }
};

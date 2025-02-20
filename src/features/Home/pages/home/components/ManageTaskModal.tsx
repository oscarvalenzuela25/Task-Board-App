import { FC } from 'react';
import EmojiInput from '../../../commons/components/EmojiInput';
import StatusInput from '../../../commons/components/StatusInput';
import Button from '../../../../../components/Button';
import DoneIcon from '../../../../../icons/DoneIcon';
import TrashIcon from '../../../../../icons/TrashIcon';
import { Input, Mode, TaskModel } from '../../../../../API/domain/models/Tasks';
import useHandlersHomeBody from './HomeBody/hooks/useHandlersHomeBody';
import BaseModal from '../../../../../components/BaseModal';

type Props = {
  isOpen: boolean;
  task: TaskModel;
  manageMode: Mode;
  validations: Record<string, boolean>;
  handleChangeTask: ({ name, value }: Input) => void;
  handleSubmitTask: VoidFunction;
  handleDeleteTask: VoidFunction;
  handleCloseModal: VoidFunction;
};

const ManageTaskModal: FC<Props> = ({
  isOpen,
  task,
  manageMode,
  validations,
  handleChangeTask,
  handleSubmitTask,
  handleDeleteTask,
  handleCloseModal,
}) => {
  const { emojiList, statusList } = useHandlersHomeBody();

  return (
    <BaseModal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      validations={validations}
    >
      <BaseModal.Title>Task details</BaseModal.Title>
      <BaseModal.Body>
        <div>
          <label
            htmlFor="taskName"
            className="text-[12px] font-medium text-gray-custom"
          >
            Task name
          </label>
          <input
            type="text"
            id="taskName"
            className="w-full px-4 py-3 rounded-xl border-2 border-black-translucent-custom focus:border-blue-custom outline-none"
            placeholder="Enter task name"
            value={task.title}
            onChange={e =>
              handleChangeTask({ name: 'title', value: e.target.value })
            }
            disabled={validations.mutationIsLoading}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="text-[12px] font-medium text-gray-custom"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-3 rounded-xl border-2 border-black-translucent-custom focus:border-blue-custom outline-none resize-none"
            placeholder="Enter a short description"
            rows={4}
            autoFocus={false}
            value={task.content}
            onChange={e =>
              handleChangeTask({ name: 'content', value: e.target.value })
            }
            disabled={validations.mutationIsLoading}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[12px] font-medium text-gray-custom">
            Icon
          </label>
          <div className="flex flex-wrap gap-3">
            {emojiList.map(emoji => (
              <EmojiInput
                key={emoji.value}
                emoji={emoji.value}
                handleSelectEmoji={({ value }) =>
                  !validations.mutationIsLoading &&
                  handleChangeTask({ name: 'emoji', value })
                }
                emojiSelected={task.emoji}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[12px] font-medium text-gray-custom">
            Status
          </label>
          <div className="flex flex-wrap gap-4">
            {statusList.map(status => (
              <StatusInput
                key={status}
                status={status}
                statusSelected={task.status}
                handleSelectedStatus={({ value }) =>
                  !validations.mutationIsLoading &&
                  handleChangeTask({ name: 'status', value })
                }
              />
            ))}
          </div>
        </div>
      </BaseModal.Body>

      <BaseModal.Footer>
        {manageMode === 'UPDATE' && (
          <Button
            variant="delete"
            isLoading={validations.mutationIsLoading}
            endIcon={<TrashIcon />}
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
        )}

        <Button
          variant="gray"
          isLoading={validations.mutationIsLoading}
          onClick={handleCloseModal}
        >
          Close
        </Button>

        <Button
          variant="primary"
          isLoading={validations.mutationIsLoading}
          disabled={!validations.validSubmit}
          endIcon={<DoneIcon />}
          onClick={handleSubmitTask}
        >
          Save
        </Button>
      </BaseModal.Footer>
    </BaseModal>
  );
};

export default ManageTaskModal;

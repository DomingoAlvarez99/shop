import { useToast } from 'primevue/usetoast';

export function toast() {
  const toast = useToast();

  const showToast = (
    severity: string,
    summay: string,
    detail: string,
    group: string,
    life = 3000
  ) => {
    toast.add({
      severity: severity,
      summary: summay,
      detail: detail,
      group: group,
      life: life
    });
  };

  const showInfoToast = (
    summay: string,
    detail: string,
    group: string,
    life = 3000
  ) => {
    showToast('info', summay, detail, group, life);
  };

  const showSuccessToast = (
    summay: string,
    detail: string,
    group: string,
    life = 3000
  ) => {
    showToast('success', summay, detail, group, life);
  };

  return {
    showInfoToast,
    showSuccessToast
  };
}

package com.example.LearningManagementSystem.Grade.Extra;

import java.util.List;

public interface ExtraService {

	void InsertUserExtra(ExtraDTO dto);

	List<ExtraDTO> getUserExtra(String user_id);

	void UpdateUserExtra(ExtraDTO dto);

}

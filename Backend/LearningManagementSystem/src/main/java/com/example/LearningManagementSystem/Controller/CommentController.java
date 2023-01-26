package com.example.LearningManagementSystem.Controller;


import com.example.LearningManagementSystem.Dto.CommentDto;
import com.example.LearningManagementSystem.Service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private final CommentService commentService;

    //댓글 작성
    @ResponseStatus(HttpStatus.OK)
    @PostMapping("/board/{boardId}/comments")
     public void postComment(@PathVariable Long boardId, @RequestBody CommentDto commentDto){
        commentService.postComment(boardId,commentDto);
    }

    @DeleteMapping("/comments/{id}")
    public void deleteComment(@PathVariable Long id){
       commentService.deleteComment(id);
    }

    //댓글 수정
    @ResponseStatus(HttpStatus.OK)
    @PutMapping("/comments/{id}")
    public void updateComment(@RequestBody CommentDto commentDto, @PathVariable("id") Long id){
        commentService.updateComment(id,commentDto);
    }
}
